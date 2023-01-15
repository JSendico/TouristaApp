"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ForumService = void 0;
// forum.service.ts
var core_1 = require("@angular/core");
var ForumService = /** @class */ (function () {
    function ForumService(firestore) {
        this.firestore = firestore;
    }
    // Create a new forum post
    ForumService.prototype.createPost = function (data) {
        return this.firestore.collection('posts').add(data);
    };
    // Get a list of all forum posts
    ForumService.prototype.getPosts = function () {
        return this.firestore.collection('posts').snapshotChanges();
    };
    // Update an existing forum post
    ForumService.prototype.updatePost = function (postId, data) {
        return this.firestore.doc('posts/' + postId).update(data);
    };
    // Delete a forum post
    ForumService.prototype.deletePost = function (postId) {
        return this.firestore.doc('posts/' + postId)["delete"]();
    };
    // Add a comment to a forum post
    ForumService.prototype.addComment = function (postId, data) {
        return this.firestore.collection('comments').add({
            postId: postId,
            text: data.text
        });
    };
    // Get the comments for a forum post
    ForumService.prototype.getComments = function (postId) {
        return this.firestore.collection('comments', function (ref) { return ref.where('postId', '==', postId); }).snapshotChanges();
    };
    // Update a comment in the Firestore database
    ForumService.prototype.updateComment = function (commentId, data) {
        return this.firestore.doc("comments/" + commentId).update(data);
    };
    // Delete a comment from the Firestore database
    ForumService.prototype.deleteComment = function (commentId) {
        return this.firestore.doc("comments/" + commentId)["delete"]();
    };
    ForumService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ForumService);
    return ForumService;
}());
exports.ForumService = ForumService;
