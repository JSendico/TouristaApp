import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  posts: Observable<any[]>;
  title: string;
  content: string;
  comment: string;
  commentId: string;
  postedDate: number;
  public user: any = [];
  name: any;
  public showContent: boolean = true;


  hideContent = false;

  constructor(private forumService: ForumService,
    private router: Router,
    public auth: AuthService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
    ) { }

  ngOnInit() {
    this.posts = this.forumService.getPosts();
    this.profile();
    this.display();


  }





  //Profile
  profile(){
    this.afAuth.authState.subscribe(currentUser => {
      this.afs.collection('user').doc(currentUser?.uid).get()
          .subscribe(snapshot => {
            if (snapshot.exists) {
              let result: any = snapshot.data();
              result.id = snapshot.id;
              this.user = result;
            } else {
              console.log("not exist.");
            }
          }, error => {
            console.log(error);
          })

  }, err => {
  console.error("Error:", err)
  });
  }


  display(){
    const data = {
      userName: this.user.userName,
      title: this.title,
      content: this.content,
      postedDate: Date.now(),




    };
    if (data.userName == this.user.userName) {
      this.hideContent = this.hideContent;
      console.log(data.userName);
      console.log(this.user.userName);
      console.log(this.hideContent);
    } else  {
      this.hideContent = !this.hideContent;
    }
  }

  // Add a new forum post
  addPost() {


    const data = {
      userName: this.user.userName,
      title: this.title,
      content: this.content,
      postedDate: Date.now(),




    };

    this.forumService.createPost(data).then(() => {

    // Clear the input
    this.title = '';
    this.content = '';


      console.log('Post created successfully!');




    }).catch((error) => {
      console.error(error);
    });
  }

 // Edit an existing forum post
 editPost(post) {
  this.title = post.payload.doc.data().title;
  this.content = post.payload.doc.data().content;


}

// Update the edited forum post
updatePost(post) {
  const data = {
    title: this.title,
    content: this.content
  };
  this.forumService.updatePost(post.payload.doc.id, data).then(() => {
    console.log('Post updated successfully!');
  }).catch((error) => {
    console.error(error);
  });
}

// Delete a forum post
deletePost(post) {
  this.forumService.deletePost(post.payload.doc.id).then(() => {
    console.log('Post deleted successfully!');
  }).catch((error) => {
    console.error(error);
  });
}
// Add a comment to a forum post
addComment(postId: string) {
  const data = {
    text: this.comment
  };
  this.forumService.addComment(postId, data).then(() => {
    console.log('Comment added successfully!');
  }).catch((error) => {
    console.error(error);
  });
}
getComments(postId) {
  return this.forumService.getComments(postId);
}
// Edit an existing comment
editComment(comment) {
  this.comment = comment.payload.doc.data().text;
  this.commentId = comment.payload.doc.id;
}

// Update the edited comment
updateComment() {
  const data = {
    text: this.comment
  };
  this.forumService.updateComment(this.commentId, data).then(() => {
    console.log('Comment updated successfully!');
  }).catch((error) => {
    console.error(error);
  });
}

// Delete a comment
deleteComment(comment) {
  this.forumService.deleteComment(comment.payload.doc.id).then(() => {
    console.log('Comment deleted successfully!');
  }).catch((error) => {
    console.error(error);
  });
}


}
