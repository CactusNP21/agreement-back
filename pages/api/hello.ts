import {NextApiRequest, NextApiResponse} from "next";
import fs from 'fs';
import path from 'path';
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const filePath = path.resolve('./public/agreement.docx'); // Adjust the path to your file
    const fileName = 'agreement';
    try {
        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            res.status(404).send('File not found');
            return;
        }

        // Set headers for file download
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

        // Send the file content
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).end('Internal Server Error');
    }
}