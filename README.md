PS Chosen SIH Hackathon - SIH25002

This README provides an overview of the project, including team details, relevant links, tasks completed, tech stack, key features, and steps to run the project locally.


Team Details

Team Name: Team Prometheus

Team Leader: Hardeek @striixxxx

Team Members:

MEMBER_1 - Hardeek -  2024UEA6504 - @striixxxx

MEMBER_2 - Swajal -   2024UEA6549 - @swajall

MEMBER_3 - Kavya -    2024UEA6520 - @Kav281005

MEMBER_4 - Innisha -  2024UEA1071 - @Innishaa

MEMBER_5 - Deepak -   2024UEA6510 - @Deepak050905

MEMBER_6 - Mridul -   2024UEA1077 - @mridulguptarcb



Project Links

SIH Presentation: [Final SIH Presentation] https://www.canva.com/design/DAGzQM_ldZg/VG982x1wPVQpJZIU9rm78A/edit?utm_content=DAGzQM_ldZg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Video Demonstration: [Watch Video] https://www.youtube.com/watch?v=WcF6FMgVQ8M

Live Deployment: [View Deployment] https://gaurdiangoapp.onrender.com/  ;;; https://gaurdiango.onrender.com/    ;; use username bob and password 12345  

Source Code: [GitHub Repository] https://github.com/striixxxx/GaurdianGo  ;; https://github.com/striixxxx/GaurdianGoapp


Overview of Project: A secure, AI-driven, multilingual, and IoT-enabled tourist safety platform that connects tourists, families, law enforcement, and tourism departments through blockchain-based digital IDs and real-time monitoring. 


Key Components:A robust digital ecosystem comprising:


• Web portal and mobile app for tourists and authorities.

• AI/ML models for behaviour tracking and predictive alerts.

• Blockchain-based ID generation and verification.

• Real-time dashboards for police/tourism departments.

• Automated alert dispatch and evidence logging systems.


Steps to run locallly:

Clone repo

Create & activate virtual environment python -m venv venv source venv/bin/activate # Mac/Linux venv\Scripts\activate # Windows

Install dependencies pip install -r requirements.txt

Set environment variables Create a .env file

Run the project uvicorn app.main:app --reload
