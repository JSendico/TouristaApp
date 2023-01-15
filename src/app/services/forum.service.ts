// forum.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  constructor(private firestore: AngularFirestore) { }

  // Create a new forum post
  createPost(data: any) {
    return this.firestore.collection('posts').add(data);
  }

  // Get a list of all forum posts
  getPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  // Update an existing forum post
  updatePost(postId: string, data: any) {
    return this.firestore.doc('posts/' + postId).update(data);
  }

  // Delete a forum post
  deletePost(postId: string) {
    return this.firestore.doc('posts/' + postId).delete();
  }


  // Add a comment to a forum post
addComment(postId: string, data: any) {
  return this.firestore.collection('comments').add({
    postId: postId,
    text: data.text
  });
}

// Get the comments for a forum post
getComments(postId: string) {
  return this.firestore.collection('comments', ref => ref.where('postId', '==', postId)).snapshotChanges();
}

// Update a comment in the Firestore database
updateComment(commentId, data) {
  return this.firestore.doc(`comments/${commentId}`).update(data);
}

// Delete a comment from the Firestore database
deleteComment(commentId) {
  return this.firestore.doc(`comments/${commentId}`).delete();
}
}
