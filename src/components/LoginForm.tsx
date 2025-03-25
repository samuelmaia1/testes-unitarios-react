import { useState } from "react"
import './LoginForm.css'

interface FormData{
    password: string,
    email: string,
}

interface FormErrors{
    email?: string,
    password?: string
}

export function LoginForm() {

    const [formData, setFormData] = useState<FormData>({
        password: '', email: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loginSuccess, setLoginSuccess] = useState(false)

    const validate = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.email)
            newErrors.email = 'E-mail inválido.'

        if (!formData.password)
            newErrors.password = 'Senha inválida.'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev , [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (validate()) {
            setIsSubmitting(true)

            setTimeout(() => {
                console.log('Esperando')
            }, 2000)

            setIsSubmitting(false)
            setLoginSuccess(true)
        }
    }

    if (loginSuccess)
        return <div>Login realizado com sucesso!</div>

    return (
        <form onSubmit={handleSubmit} data-testid='login-form'>

            <label htmlFor="email">E-mail:</label>
            <input 
                type="text" 
                name="email"
                id="email"
                onChange={handleChange}
                value={formData.email}
                data-testid='form-input'
            />
            <span>
                {errors.email && <p>{errors.email}</p>}
            </span>

            <label htmlFor="password">Senha: </label>
            <input 
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={formData.password} 
                data-testid='form-input'
            />
            <span>
                {errors.password && <p>{errors.password}</p>}
            </span>


            <button 
                type="submit" 
                disabled={isSubmitting}
                name='entrar'
            >
                {isSubmitting ? 'Entrando' : 'Entrar'}
            </button>

            
        </form>
    )

}