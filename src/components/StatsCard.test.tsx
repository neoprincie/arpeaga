import React from 'react'
import { render, screen } from '@testing-library/react'
import StatsCard from './StatsCard'

test('renders without crashing', () => {
  const { baseElement } = render(<StatsCard sessionTime={ 0 } />)
  expect(baseElement).toBeDefined()
})

test('displays session time 0 as hh:dd:ss', () => {
    render(<StatsCard sessionTime={ 0 } />)

    const sessionTime = screen.getByTestId("sessionTime")

    expect(sessionTime).toHaveTextContent("00:00:00")
})

test('displays session time 8274 as 02:17:54', () => {
    render(<StatsCard sessionTime={ 8274 } />)

    const sessionTime = screen.getByTestId("sessionTime")

    expect(sessionTime).toHaveTextContent("02:17:54")
})

test('displays current run time 0 as hh:dd:ss', () => {
    render(<StatsCard currentRunTime={ 0 } />)

    const currentRunTime = screen.getByTestId("currentRunTime")

    expect(currentRunTime).toHaveTextContent("00:00:00")
})

test('displays current run time 8274 as 02:17:54', () => {
    render(<StatsCard currentRunTime={ 8274 } />)

    const currentRunTime = screen.getByTestId("currentRunTime")

    expect(currentRunTime).toHaveTextContent("02:17:54")
})

test('displays run count', () => {
    render(<StatsCard runCount={ 33 } />)

    const runCount = screen.getByTestId("runCount")

    expect(runCount).toHaveTextContent("33")
})

test('displays total runs', () => {
    render(<StatsCard totalRuns={ 1337 } />)

    const totalRuns = screen.getByTestId("totalRuns")

    expect(totalRuns).toHaveTextContent("1337")
})