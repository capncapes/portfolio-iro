---
layout: post
title: ngClick vs ngSubmit
author: Brandon Caples
feature-img: "img/ngclick_vs_ngsubmit.jpeg"
social-share: "img/ngclick_vs_ngsubmit.png"
---

Angular has some nuances that can cause some trouble for beginners learning the framework. One of these little subtleties is the difference between `ng-click` and `ng-submit`, two of Angular’s many useful directives.

The official documentation for `ng-click`: The ngClick directive allows you to specify custom behavior when an element is clicked.

The official documentation for `ng-submit`: Enables binding AngularJS expressions to onsubmit events.

So ngSubmit binds to the browser’s submit event, while ngClick can be used on just about any HTML element that can be clicked in order to trigger some custom behavior, like navigating to the next or previous page or opening a modal (in order to submit a form with ngSubmit!).

Angular prevents the default action of an element unless it contains `action`, `x-action`, or `data-action` attributes with values. Since the default action of a form element is submitting the form data to a server, this action can be overridden, and ngClick or ngSubmit can be used to trigger another behavior.

For purposes of accessibility, if you want a button event to occur by pressing Enter or by clicking it, you can use either ngSubmit or ngClick. If your form uses the ng-submit directive and has a button with an attribute of type=”submit”, pressing Enter will submit the form. Additionally, if you specify type=”submit” on either a button or an input element, you can also trigger the click event  by pressing Enter on your ng-click directive.

In many cases, ngClick and ngSubmit act in much the same way. While you could use `ng-click` in lieu of `ng-submit`, you would lose some of Angular’s powerful built-in directives, like `required`, `ng-minlength`, and `ng-maxlength`. Using ngSubmit on a form rather than ngClick on a button can also prevent an invalid form from submitting.

The short answer: Use ngSubmit on forms and input elements, and use ngClick on other elements requiring different behaviors.