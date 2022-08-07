import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import CounterControl from './CounterControl'
import { RecoilObserver } from './RecoilObserver'
import { counterTrackingState } from '../atoms'

test('renders without crashing', () => {
    const onChange = jest.fn()
    const { baseElement } = render(
        <RecoilRoot>
            <RecoilObserver node={counterTrackingState} onChange={onChange} />
            <CounterControl />
        </RecoilRoot>,
    )
    expect(baseElement).toBeDefined()
})

test('disables Next Game button by default', () => {
    const onChange = jest.fn()
    
    render(
        <RecoilRoot>
            <RecoilObserver node={counterTrackingState} onChange={onChange} />
            <CounterControl />
        </RecoilRoot>,
    )

    const nextGameButton: any = screen.getByTestId("nextGameButton")

    expect(nextGameButton.disabled).toBe(true)
})

test('starts game when play/pause is pressed and counter is not running', () => {
    const onChange = jest.fn()
    
    render(
        <RecoilRoot>
            <RecoilObserver node={counterTrackingState} onChange={onChange} />
            <CounterControl />
        </RecoilRoot>,
    )

    const playPauseButton = screen.getByTestId("playPauseButton")
    fireEvent.click(playPauseButton)

    expect(onChange).toHaveBeenCalledWith({ isRunning: true })
})

