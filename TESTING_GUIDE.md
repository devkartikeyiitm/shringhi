# Testing Guide

## Unit Tests
Run unit tests with Jest:
```bash
npm test
```

## Integration Tests
For integration testing:
```bash
npm run test:integration
```

## Test Coverage
Generate coverage report:
```bash
npm run test:coverage
```

## End-to-End Tests
Run E2E tests with Playwright:
```bash
npm run test:e2e
```

## Testing Best Practices
1. Write tests alongside features
2. Aim for 80%+ code coverage
3. Test edge cases and error handling
4. Use descriptive test names
5. Keep tests isolated and independent

## Continuous Integration
Tests run automatically on every push through GitHub Actions.
