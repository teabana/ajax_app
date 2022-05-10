class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  def new
  end

  def create
    post = Post.create(content: params[:content])
    redirect_to json;{post: post}
  end
end
