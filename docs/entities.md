# Entities

## Auth

### User

Username Req
Enabled
Account status Req
Email Req
Email verified Req
Phone number verified Req
Updated Req
Created Req

| Name                  | Type    | Required |
| --------------------- | ------- | :------: |
| username              | string  |    ✅    |
| enabled               | string  |    ✅    |
| account_status        | string  |    ✅    |
| email                 | string  |    ✅    |
| email_verified        | boolean |    ✅    |
| phone_number_verified | boolean |    ❌    |
| updated               | date    |    ✅    |
| created               | date    |    ✅    |

## Other Entities

### Book

| Name       | Type    | Required |
| ---------- | ------- | :------: |
| id         | string  |    ✅    |
| title      | string  |    ✅    |
| author     | string  |    ✅    |
| user       | User    |    ✅    |
| userId     | string  |    ✅    |
| status     | string  |    ✅    |
| rating     | integer |    ✅    |
| pages      | integer |    ✅    |
| image      | string  |    ❌    |
| review     | string  |    ❌    |
| read_pages | integer |    ✅    |
| createdAt  | date    |    ✅    |
| updatedAt  | date    |    ✅    |
