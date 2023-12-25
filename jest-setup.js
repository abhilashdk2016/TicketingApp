import '@testing-library/jest-dom';
import React from 'react';
import { server } from './__mocks__/server';

global.React = React; // this also works for other globally available libraries

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});

