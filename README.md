# SENG371

This repositiory will contain the documents required for UVIC's SENG 371: Software Evolution 

The project that White Coat Clinic is working on will upgrade the current medical record system. It is called Electronic Medical Record.

To run the application in local machine, run the following commands in the my-app directory:

>**npm install**  
>**npm start**

It will trigger the application at the following website:
>**http://localhost:3000/**

To run the application inside Docker container, run the following commands in the my-app directory:

>**docker build -t containername .**  
>**docker run --rm -it --name web -p 3000:3000 containername**

To check whether the application inside the Docker container has ran successfully, go to the following website:
>**http://localhost:3000/**

Once the application is triggered, the UI for login will be shown with the fields of username and password
To use our app insert the following credentials to login and then click the **submit** button, 

>**username = admin**  
>**password = 1234**  

Once logged in, assuming the user is a Doctor, the Doctor will be shown list of patients that he/she will need to be attend based on appointment timings.

If username and password does not match then the application will allow the user to insert the credentials again.
