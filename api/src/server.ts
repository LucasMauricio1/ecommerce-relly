import {z} from 'zod'

const userSchema = z.object({
  name: z.string().nonempty({message: 'Name is required'}).toUpperCase(),
  age: z.number().min(18, {message: 'Você tem que ser maior de idade'})
})

type User = z.infer<typeof userSchema>

function saveUser(user: User) {
  const {name, age} = userSchema.parse(user)

  console.log(name, age)
}

saveUser({
  name: 'Lucas',
  age: 20
})