import { Hono } from 'hono'
import { User } from '@prisma/client'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()
app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);



export default app

//postgres://avnadmin:AVNS_2TooQ6D3iqRw6rB2jjw@test-osmabed10.a.aivencloud.com:20293/defaultdb?sslmode=require
//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiY2Y0NTE5OWYtNjQ3ZC00YjgyLWE2YjMtN2Q2ODVmY2VjNzc3IiwidGVuYW50X2lkIjoiNWQ1MmM4ODY4NmY3ZDM1NjNlZWMyZjQ4Y2I5NDdlYWI3MzFjOWY5NjllYWRlNzY1ZTAxNDdmYjc2MWI5N2IwZCIsImludGVybmFsX3NlY3JldCI6ImQ0Nzc3NTc2LWQwMTMtNGQ1Yi05Y2Q5LTFmNDExODRkZTNmYyJ9.oaTFLGGERclQ5X4zf-NzNe3xnM8NjcwgzKbdA4SpWTE"