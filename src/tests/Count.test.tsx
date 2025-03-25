import {render, screen, fireEvent} from '@testing-library/react'
import { Count } from '../components/Count'

describe('Count component', () => {

    it ('Renders with initial value', () => {
        render(<Count initialValue={10} />)

        const countValue = screen.getByTestId('count-value')
        expect(countValue).toHaveTextContent('10')
    })

    it ('Renders with default value 0 when initial value is not provided', () => {
        render(<Count />)

        const countValue = screen.getByTestId('count-value')
        expect(countValue).toHaveTextContent('0')
    })

    it ('Increments count when increment button is clicked', () => {
        render(<Count initialValue={5} />)

        const incrementButton = screen.getByTestId('increment-button')
        const countValue = screen.getByTestId('count-value')

        fireEvent.click(incrementButton)
        expect(countValue).toHaveTextContent('6')

        fireEvent.click(incrementButton)
        expect(countValue).toHaveTextContent('7')
    })

    it ('Decrements count when decrement button is clicked', () => {
        render (<Count initialValue={10} />)

        const decrementButton = screen.getByTestId('decrement-button')
        const countValue = screen.getByTestId('count-value')

        fireEvent.click(decrementButton)
        expect(countValue).toHaveTextContent('9')

        fireEvent.click(decrementButton)
        expect(countValue).toHaveTextContent('8')
    })

    it('handles multiple increment and decrement interactions', () => {
        render(<Count initialValue={10} />)
        
        const incrementButton = screen.getByTestId('increment-button')
        const decrementButton = screen.getByTestId('decrement-button')
        const countValue = screen.getByTestId('count-value')
        
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)
        fireEvent.click(decrementButton)
        fireEvent.click(incrementButton)
        
        expect(countValue).toHaveTextContent('12')
      })
})