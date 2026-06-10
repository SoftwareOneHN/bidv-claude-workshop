import express from 'express'

const app = express()
app.use(express.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'loan-tracker-api' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Loan Application Tracker API running on port ${PORT}`)
})

export default app
