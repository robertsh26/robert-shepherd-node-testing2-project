const request = require('supertest');
const server = require('../server');
const db = require('../../data/db-config');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe('GET /api/resources', () => {
  it('should return 200 and all resources', async () => {
    const res = await request(server).get('/api/resources');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(3); // Assuming 3 resources are seeded
  });
});

describe('POST /api/resources', () => {
  it('should create a new resource', async () => {
    const newResource = { name: 'New Resource' };
    const res = await request(server)
      .post('/api/resources')
      .send(newResource);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(newResource.name);
  });
});
