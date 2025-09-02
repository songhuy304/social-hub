import '@testing-library/jest-dom';
import 'whatwg-fetch';

// Silence Next.js router warnings in tests
jest.mock('next/router', () => require('next-router-mock'));


