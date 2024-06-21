// Import necessary modules
import express, { Request, Response } from 'express';

// Initialize Express application
const app = express();
const PORT = 3000; // Choose any port number you prefer

// Define middleware to parse JSON body
app.use(express.json());

// Example endpoint to handle GET request
app.get('/api/ping', (req: Request, res: Response) => {
    res.send('Server is running');
});

// Example endpoint to handle POST request
app.post('/api/submit', (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    // Process the data (e.g., save to database)
    console.log(`Received submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.status(200).send('Submission received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
