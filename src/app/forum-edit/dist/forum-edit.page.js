"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForumEditPage = void 0;
var core_1 = require("@angular/core");
var ForumEditPage = /** @class */ (function () {
    function ForumEditPage(forumService, router, auth, afs, afAuth) {
        this.forumService = forumService;
        this.router = router;
        this.auth = auth;
        this.afs = afs;
        this.afAuth = afAuth;
        this.user = [];
    }
    ForumEditPage.prototype.ngOnInit = function () {
        this.posts = this.forumService.getPosts();
        this.profile();
        // this.editPost(post);
    };
    //Profile
    ForumEditPage.prototype.profile = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (currentUser) {
            _this.afs.collection('user').doc(currentUser === null || currentUser === void 0 ? void 0 : currentUser.uid).get()
                .subscribe(function (snapshot) {
                if (snapshot.exists) {
                    var result = snapshot.data();
                    result.id = snapshot.id;
                    _this.user = result;
                }
                else {
                    console.log("not exist.");
                }
            }, function (error) {
                console.log(error);
            });
        }, function (err) {
            console.error("Error:", err);
        });
    };
    // Add a new forum post
    ForumEditPage.prototype.addPost = function () {
        var data = {
            title: this.title,
            content: this.content,
            'postedDate': Date.now()
        };
        this.forumService.createPost(data).then(function () {
            console.log('Post created successfully!');
        })["catch"](function (error) {
            console.error(error);
        });
    };
    // Edit an existing forum post
    ForumEditPage.prototype.editPost = function (post) {
        this.title = post.payload.doc.data().title;
        this.content = post.payload.doc.data().content;
    };
    // Update the edited forum post
    ForumEditPage.prototype.updatePost = function (post) {
        var data = {
            title: this.title,
            content: this.content
        };
        this.forumService.updatePost(post.payload.doc.id, data).then(function () {
            console.log('Post updated successfully!');
        })["catch"](function (error) {
            console.error(error);
        });
    };
    // Delete a forum post
    ForumEditPage.prototype.deletePost = function (post) {
        this.forumService.deletePost(post.payload.doc.id).then(function () {
            console.log('Post deleted successfully!');
        })["catch"](function (error) {
            console.error(error);
        });
    };
    // Add a comment to a forum post
    ForumEditPage.prototype.addComment = function (postId) {
        var data = {
            text: this.comment
        };
        this.forumService.addComment(postId, data).then(function () {
            console.log('Comment added successfully!');
        })["catch"](function (error) {
            console.error(error);
        });
    };
    ForumEditPage.prototype.getComments = function (postId) {
        return this.forumService.getComments(postId);
    };
    // Edit an existing comment
    ForumEditPage.prototype.editComment = function (comment) {
        this.comment = comment.payload.doc.data().text;
        this.commentId = comment.payload.doc.id;
    };
    // Update the edited comment
    ForumEditPage.prototype.updateComment = function () {
        var data = {
            text: this.comment
        };
        this.forumService.updateComment(this.commentId, data).then(function () {
            console.log('Comment updated successfully!');
        })["catch"](function (error) {
            console.error(error);
        });
    };
    // Delete a comment
    ForumEditPage.prototype.deleteComment = function (comment) {
        this.forumService.deleteComment(comment.payload.doc.id).then(function () {
            console.log('Comment deleted successfully!');
        })["catch"](function (error) {
            console.error(error);
        });
    };
    ForumEditPage = __decorate([
        core_1.Component({
            selector: 'app-forum-edit',
            templateUrl: './forum-edit.page.html',
            styleUrls: ['./forum-edit.page.scss']
        })
    ], ForumEditPage);
    return ForumEditPage;
}());
exports.ForumEditPage = ForumEditPage;
