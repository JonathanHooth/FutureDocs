# FutureDocs
## About
College and high school students make profiles and apply for medical opportunities in a job-posting format. If they are chosen, they will be emailed directly by the professionals who posted the postition. (the user profile contains student contact information). Pop-up windows are used for a lot of functionality, establishing a retro feel. 

# Backend
## Download the Following

    reference: https://code.visualstudio.com/docs/python/python-tutorial
    install python from python.org
    Install VS Code
    Install VS Code Python extension 

## Download the Code
1. Navigate into the Repository
2. Download the zip folder from the repository
3. Extract the folder
4. Open the folder directory in VS Code
5. Open the backend folder in VS Code

## Set up venv in the Backend Folder
    press Ctrl+Shift+P to open the command runner
    search for and choose the "Python: Create Environment..." option
    choose the "Venv" option
    choose the "Python 3.11.8 64-bit /bin/python" option (or any Installed Python Version)
    select the "Terminal" menu at the top of the screen and choose "New Terminal"

Installing packages reference: 
> https://realpython.com/python-virtual-environments-a-primer

## Installing SQLite3

Link to Download:
> https://www.sqlite.org/download.html

Under the ***Precompiled Binaries for Windows***, download the **A bundle of command-line tools for managing SQLite database files** option, as it is needed to run the project smoothly.

After downloading SQLite3, unzip the folder and place it in a safe location. Then, for Windows, go to
**Edit the system environment variables** in Settings. Select **Environment Variables**, then under ***System Variables***, edit the Path variable by adding the location of the SQLite 3 folder.

Video for extra guidance: https://www.youtube.com/watch?v=2CAspm7YwTU


### Windows - run these commands in the VS Code terminal:
    python -m venv venv
    venv\Scripts\activate
    python -m pip install fastapi[all]
    python -m pip install uvicorn
    python -m pip install sqlalchemy\
        

### Linux - run these commands in the VS Code terminal:
    python3 -m venv venv
    source venv/bin/activate
    python -m pip install fastapi[all]
    python -m pip install uvicorn
    python -m pip install sqlalchemy

Make sure fastapi, uvicorn, and sqlalchemy are all downloaded from your package manager on your local device

## Running the backend
    navigate to main.py and run the file using:
> python main.py


# Frontend
## Prerequisites for Running the Frontend

### NPM
NPM is needed to run the frontend part of RateMyStudent. To install npm, follow these steps:
1. Visit https://nodejs.org/en/download
2. Download the lts version of the installer
3. Run the installer

## Running the Frontend
1. Using an IDE of your choice, open up the project folder
2. Open up a terminal instance
3. Access the frontend folder by running ```cd frontend```
   in the terminal

## Installing the Dependencies

Inside of rateMyStudent/frontend, run the following commands

    npm install
    npm install react-router-dom
    npm install axios
    npm install @dnd-kit/core
    npm install react-redux
    npm install @reduxjs/toolkit


Once those dependencies are done, you will be able to sucessfully run the frontend part of the application.

However, before you launch it, ensure that the backend server, backend/main.py is running in another terminal with the command **python main.py**. Once you have verified that the backend server, run the following command:
>    npm start

Then in your browser, navigate to http://localhost:5173/ and begin coding!
