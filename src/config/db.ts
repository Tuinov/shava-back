import pkg from 'pg'
const { Pool } = pkg;

export const db = new Pool({
    user: 'wouapnqcxdhpie',
    password: '90f90765b9d3d61796ac027a060eb8295c60c6b24563cbffe5d34270af085c56',
    host: 'ec2-34-249-49-9.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd4d90t3r0ubrvo',
    ssl: {
        rejectUnauthorized: false,
    }
    
})