import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pmucoahxjghajkzvlvhg.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdWNvYWh4amdoYWprenZsdmhnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyODIyNDgxNiwiZXhwIjoyMDQzODAwODE2fQ.yVEmraA1vcTWOMsZI85g5pwj1GJpnu7Uno02VRa_slM',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdWNvYWh4amdoYWprenZsdmhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgyMjQ4MTYsImV4cCI6MjA0MzgwMDgxNn0.QpZ0jkKSVFweZQOki-BEKgIt4MXsPlkU1G9NDff5Xio',
  },
});