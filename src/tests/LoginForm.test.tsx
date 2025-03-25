import '@testing-library/jest-dom'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import { LoginForm } from '../components/LoginForm'

jest.mock('./LoginForm.css', () => ({}))

describe('Login Form Component', () => {
    it ('Render all form fields', () => {
        render(<LoginForm />)

        expect(screen.getByLabelText('E-mail:')).toBeInTheDocument()
        expect(screen.getByLabelText('Senha:')).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'Entrar'})).toBeInTheDocument()
    })

    it ('Show an error message when a field is empty', async () => {
        render(<LoginForm />)

        fireEvent.submit(screen.getByTestId('login-form'))

        await waitFor(() => {
            expect(screen.getByText('E-mail inválido.')).toBeInTheDocument()
            expect(screen.getByText('Senha inválida.')).toBeInTheDocument()
        })
    })

    it ('Show a success message when login is ok', async () => {
        render(<LoginForm />)

        fireEvent.change(screen.getByLabelText('E-mail:'), {
            target: { value: 'test@example.com' }
        })

        fireEvent.change(screen.getByLabelText('Senha:'), {
            target: { value: 'password123' }
        })

        fireEvent.submit(screen.getByTestId('login-form'))

        await waitFor(() => {
            expect(screen.getByText('Login realizado com sucesso!')).toBeInTheDocument()
        })
    })
})