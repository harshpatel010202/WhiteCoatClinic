# SENG371

This repositiory will contain the documents required for UVIC's SENG 371: Software Evolution 

The project that White Coat Clinic is working on will upgrade the current medical record system. It is called Electronic Medical Record.

To run the application in local machine, run the following commands in the my-app directory:

>**npm install**  
>**npm run start**

To run the application inside Docker container, run the following commands in the my-app directory:

>**docker build -t containername .**  
>**docker run --rm -it --name web -p 3000:3000 containername**

Once the application is triggered, the UI for login will be shown with the fields of username and password
To use our app insert the following credentials to login, 

>**username = admin**  
>**password = 1234**  

Once logged in, assuming the user is Doctor, Doctor will be shown list of patients that they will need to be attend.

If username and password does not match then the application will allow the user to insert the credentials again.
