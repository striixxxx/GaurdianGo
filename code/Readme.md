Tasks Accomplished

 Task 1: Dashboard for Authorities : Full frontend and basic backend is completed and deployed

 Task 2: Apps for tourusts : Basic frontend is completed and deployed as a website for now

 Task 3: Chatbot for tourists : Fully working chatbot is integrated in the frontend 


Technology Stack

This project leverages the following technologies:

Gen AI: Chatbot for Giving recommendations on nearby places and safety tips to tourists

Blockchain: Unique id for tourists identification

Firebase Push Notifications: sending instant  alerts

i18n libraries : Multilingual support

Mapbox AI - integrating inteteractive maps

Key Features:

Multilingual Support: Extend usage to tourists from various countries and regions within India

Chatbot : Giving recommendations on nearby places and safety tips to tourists

Geofencing : High risk areas will be identified and tourists entering those areas will be issued a warning

Automated Alerts : If a tourist is diconnected for too long . AI anamoly detection will also be used to generated alerts based on previous patterns

Authorities Dasboard : Dasboard for police / tourism officers to see active tourists and alerts . Tourist clusters can also be identified to increase secuirty . Feature to assign person/team on a paricular alert to increase validity


Follow these steps to run the project locally

Clone the Repository

git clone GITHUB_LINK_TO_THE_REPO
cd GAURDIANGO

enter the backend directory

cd code/backend


create and activate virtual environment

python -m venv venv

 source venv/bin/activate # Mac/Linux 
 
 venv\Scripts\activate # Windows


install requirements

pip install -r requirements.txt


Run the project 

uvicorn app.main:app --reload




