import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('http://localhost:3000/api/Tickets', (req, res) => {
        return HttpResponse.json({
            tickets: [
                {
                    title: 'First',
                    description: 'First Issue',
                    category: 'Software Problem',
                    priority: 2,
                    progress: 3,
                    status: 'not started',
                    active: true
                }
            ]
        })
    })
];