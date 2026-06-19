Document Signature App
This is a MERN Stack Document Signature System where users can:

 Upload PDF documents
 View list of documents
 Drag and place signature on PDF
Save signature position (x, y coordinates)
 Send signature request via email link
 Open public signing page using token
 Track status (Pending / Signed / Rejected)
 Maintain audit trail (who signed, when, IP address)
 Tech Stack Used
 Frontend
React.js
React Router
Axios
Tailwind CSS (UI styling)
  Backend
Node.js
Express.js
MongoDB + Mongoose
Multer (file upload)
Nodemailer (email sending)
Crypto (token generation)
  Deployment
Frontend → Netlify
Backend → Render
Database → MongoDB Atlas
  Core Features
 1. Document Management
Upload PDF files
Store file path in MongoDB
Display list of documents
 2. Signature System
Drag signature box on document
Capture position (x, y)
Save to database
3. Email Signature Flow
Generate unique token
Send email link to signer
Open public signing page
 4. Public Signature Page
Access via token URL
Example:
https://app.com/sign/:token
 5. Dashboard
View all documents
Filter by status:
Pending 
Signed 
Rejected 
 6. Audit Trail
Store:
fileId
signedBy
IP address
signedAt timestamp
