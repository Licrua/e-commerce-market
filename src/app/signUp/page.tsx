'use client'
import { useFormSubmit } from '@/hooks/useFormSubmit'
import notify from '@/utils/notify'
import { submitForm } from '@/utils/submitForm'
import Link from 'next/link'
import { startTransition, useActionState } from 'react'

function SignUp() {
  const [state, formAction, isPending] = useActionState(submitForm, null)
  const { onSubmit } = useFormSubmit(formAction, notify.userRegistered)

  //   const onSubmit = (e) => {
  //     e.preventDefault()
  //     notify.userRegistered() // Вызывается в клиентском коде
  //     // formAction(new FormData(e.target)) // Отправка данных формы
  //     startTransition(() => {
  //       formAction(new FormData(e.target))
  //     })
  //   }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl py-3 font-bold">Регистрация</h1>
          <span className="bg-purple-200 p-1">Добро пожаловать!</span>
          <p className="mt-3">
            <em>
              Зарегистрируйтесь, чтобы начать пользоваться нашим сервисом.
              Укажите свои данные ниже.
            </em>
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={onSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Электронная почта</span>
              </label>
              <input
                type="email"
                placeholder="Введите вашу почту"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Пароль</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Введите пароль"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Подтвердите пароль</span>
              </label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                placeholder="Подтвердите пароль"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                onClick={() => console.log()}
                disabled={isPending}
                className="btn btn-primary"
              >
                {isPending ? 'Отправка...' : 'Зарегистрироваться'}
              </button>
              {state?.message && (
                <p className="text-green-500 mt-2 text-center">
                  {state.message}
                </p>
              )}
              {state?.error && (
                <p className="text-red-500 mt-2 text-center">{state.error}!</p>
              )}
              <div className="divider divider-neutral">Или</div>
              <div>
                <Link href={'/logIn'}>
                  <button className="btn text-center w-full btn-primary">
                    Войти
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
