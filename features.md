# Main Features of 1Announce Group - B

We have three major features in this Full STack MERN Application:

1. `Authentication`:

    * Authentication is one of the most important features of this project. We used firebase authentication for
      authenticating the user into the system. User will be displayed with a front page for Sign up and Sign In
      Functionality. We used conditional rendering to acheive both Sign up and Sign in efficiently in a single page
      without having to traverse to new route. Currently a new user can only Sign up by providing their `Email`
      and `Password` such that next time the user directly logs into the system, they will be authenticated using user
      object of firebase OAuth. This feature can be further developed such that we could implement all major platform
      OAuth's such as `Google`, `FaceBook` and `Github` for a seamless user experience.


2. `Channel Integration`:

    * Slack provides rich APIs to authorise users along with their basic info like channels and team_id.

    * This feature will allow user to authorise their slack workspace with 1announce so that they can post announcement
      on desired channel.

    * Additionally, this features provides DB connection and stores user data (i.e. Email, Auth Token, channel name
      etc.) to MongoDB Cloud Atlas so that it can later be used while creating announcement

    * This feature also provides backend for posting various kinds of attachments like images, media, text in the form
      of slack blogs.


3. `User Inerface for broadcasting Announcements`:

    * The feature named ‘Broad Cast Announcement Form’ helps the user in writing the messages to be broadcasted along
      with any media content if necessary.

    * It also provides an option to select the date and time when the broadcasting needs to be triggered to different
      channels.

    * We are implementing the following channels Microsoft Teams, Slack and Twitter.


4. `Announcement Scheduler`:

    * Using node-cron, this functionality creates scheduler which posts announcement at user given time input
    * Here, user can give input in date/hour/minute and message will be posted to selected channel according to that
      time


5. `NavBar`:

    * The Navbar acts as a one-stop solution for navigating through the entire application. It has the options
      like `About`, `Broadcast`, `Announcements`, `Logout` and `User Profile`.
    * The `Broadcast` option helps in broadcasting the message to the selected channel once the required information is
      filled by the user.
    * We have implemented the `Log out` feature which logs the user out from the current session.
    * Once the user session ends, all the navbar options are auto hidden.
    * For Security reasons all the navbar options will only be displayed to the authenticated user.
    * Each option can be navigated through a simple click event.


6. `Global Store`
    * Global Store feature acts as the display or review page for the user.
    * Once the user enters all the essential details for broadcast in `Broadcast` page, the user is redirected to this
      review page.
    * In this feature, we review user with all the details such as `UserName`, `Message`, `Platform to post to`
      , `Scheduler`, `Date of Schedule` and `Title` of the message respectively.
    * If user finds any data discrepancy in this page, he/she can navigate to the `Broadcast` page and generate the
      announcement again.
