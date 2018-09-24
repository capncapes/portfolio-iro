---
layout: post
title: Rails 5 and Rspec Parameters
author: Brandon Caples
feature-img: "img/rails_5_and_rspec_parameters.jpeg"
social-share: "img/rails_5_and_rspec_parameters.png"
short-description: Because of a deprecation to Rspec in Rails 5, parameters must now be placed inside a params hash.
canonical: https://www.capleswebdesign.com/posts/rails-5-rspec-parameters
---

Because of a deprecation to Rspec in Rails 5, parameters must now be placed inside a params hash.

Say, for instance, that I have a Rails 5 app (<a href="http://brandoncaples.com/portfolio/bloccit.html">like this one</a>) in which users can create posts. The following would have worked fine in a Rails 4 controller spec:

{% highlight ruby %}
describe "POST create" do
    it "redirects the user to the sign in view" do
        post :create, post_id: my_post.id, comment: { body: RandomData.random_paragraph }
        expect(response).to redirect_to(new_session_path)
    end
end
{% endhighlight %}

But Rails 5 provides the following error message:

{% highlight ruby %}
1) CommentsController guest POST create redirects the user to the sign in view
     Failure/Error: post :create, post_id: my_post.id, comment: { body: RandomData.random_paragraph }

     ArgumentError: unknown keywords: post_id, comment
{% endhighlight %}

The reason for this previously accepted syntax is deprecation. I don't know why this decision was made, but Rails 5 requires that parameters be placed inside of a `params` hash. I guess it's more human readable this way. So here are my parameters inside a `params` hash:

{% highlight ruby %}
describe "POST create" do
    it "redirects the user to the sign in view" do
        post :create, params: { post_id: my_post.id, comment: { body: RandomData.random_paragraph } }
        expect(response).to redirect_to(new_session_path)
    end
end
{% endhighlight %}

And the errors are gone!