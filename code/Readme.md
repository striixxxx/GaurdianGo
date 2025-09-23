# GuardianGo (Dashboard + Tourists + Chatbot)

**PS Chosen: SIH Hackathon - SIH25002**

This README provides an overview of GuardianGo, focusing on the dashboard for authorities, apps for tourists, and AI-powered chatbot.

---

## Tasks Accomplished
- **Task 1: Dashboard for Authorities**  
  Full frontend and basic backend completed and deployed  
- **Task 2: Apps for Tourists**  
  Basic frontend completed and deployed as a website for now  
- **Task 3: Chatbot for Tourists**  
  Fully working chatbot integrated in the frontend  

---

## Technology Stack
This project leverages the following technologies:

- **Gen AI:** Chatbot for recommendations & safety tips  
- **Blockchain:** Unique ID for tourist identification  
- **Firebase Push Notifications:** Instant alerts delivery  
- **i18n Libraries:** Multilingual support  
- **Mapbox AI:** Interactive maps integration  

---

## Key Features
- **Multilingual Support:** Extend usage to tourists from different countries/regions  
- **Chatbot:** Recommendations on nearby places + safety tips  
- **Geofencing:** Identify high-risk areas → tourists entering those areas receive warnings  
- **Automated Alerts:** Alerts generated if tourist is disconnected too long; anomaly detection via AI  
- **Authorities Dashboard:** Police/Tourism officers can:  
  - View active tourists & alerts  
  - Identify tourist clusters  
  - Assign a team/person to handle an alert → improves response validity  

---

## Run Locally

### Clone the Repository
```bash
git clone https://github.com/striixxxx/GaurdianGo
cd GAURDIANGO
```
### Enter the backend directory
```bash
cd code/backend
```
### Create and activate virtual environment

Mac/Linux
```bash
python -m venv venv
source venv/bin/activate
```
Windows
```bash
python -m venv venv
venv\Scripts\activate
```

### Install requirements
```bash
pip install -r requirements.txt
```
 
### Run the project
```bash
uvicorn app.main:app --reload
```


