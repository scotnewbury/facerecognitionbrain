# Face Recognition Brain

After registering with the system the user may submit the URL of a picture. The application will then scan the image for a face and identify it by placing a box around it.

The user information along with a count of the number of images submitted are stored in a PostgreSQL database.

## Change-log
***
2019-07-11: Modified route logic so that on signout the user is returned to the signin page instead of the register new user page.
