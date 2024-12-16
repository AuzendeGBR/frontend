import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useNavigation from '../../../app/libs/navigate';
import clientService from '../../../app/services/clientService';
import styles from './Register.module.css';

const schema = z
  .object({
    nome_completo: z
      .string()
      .min(3, {
        message: 'O nome deve ter pelo menos 3 caracteres.',
      })
      .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/, {
        message: 'O nome não pode conter números.',
      }),
    sexo: z.enum(['MASCULINO', 'FEMININO']),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
    celular: z
      .string()
      .regex(/\(\d{2}\) \d{5}-\d{4}/, 'Número de celular inválido'),
    data_nascimento: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Data de nascimento inválida')
      .refine((data) => {
        const hoje = new Date();
        const nascimento = new Date(data);
        return nascimento < hoje;
      }, 'A data de nascimento deve ser no passado'),
    email: z.string().email('E-mail inválido'),
    senha: z
      .string()
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
      .regex(/\d/, 'A senha deve conter pelo menos um número'),
    confirmar_senha: z.string(),
    tipo: z.enum(['CLIENTE', 'ADMIN', 'FUNCIONARIO']).default('CLIENTE'), // Define 'CLIENTE' como valor padrão
  })
  .refine((data) => data.senha === data.confirmar_senha, {
    message: 'As senhas devem ser iguais.',
    path: ['confirmar_senha'],
  });
type FormValues = z.infer<typeof schema>;

const Register = () => {
  const navigate = useNavigation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      tipo: 'CLIENTE',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      if (data.senha === data.confirmar_senha) {
        await clientService.create(data);
        alert('Usuário registrado com sucesso!');
        navigate('/login');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert('Erro ao criar usuário.');
        console.log(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Nome Completo</label>
            <input {...register('nome_completo')} className={styles.input} />
            {errors.nome_completo?.message && (
              <p className={styles.errorMessage}>
                {errors.nome_completo.message}
              </p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Sexo</label>
            <select {...register('sexo')} className={styles.select}>
              <option value=''>Selecione</option>
              <option value='MASCULINO'>Masculino</option>
              <option value='FEMININO'>Feminino</option>
            </select>
            {errors.sexo && (
              <p className={styles.errorMessage}>{errors.sexo.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>CPF</label>
            <input {...register('cpf')} className={styles.input} />
            {errors.cpf && (
              <p className={styles.errorMessage}>{errors.cpf.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Celular</label>
            <input {...register('celular')} className={styles.input} />
            {errors.celular && (
              <p className={styles.errorMessage}>{errors.celular.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Data de Nascimento</label>
            <input
              type='date'
              {...register('data_nascimento')}
              className={styles.input}
            />
            {errors.data_nascimento && (
              <p className={styles.errorMessage}>
                {errors.data_nascimento.message}
              </p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>E-mail</label>
            <input
              type='email'
              {...register('email')}
              className={styles.input}
            />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Senha</label>
            <input
              type='password'
              {...register('senha')}
              className={styles.input}
            />
            {errors.senha && (
              <p className={styles.errorMessage}>{errors.senha.message}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Confirmar Senha</label>
            <input
              type='password'
              {...register('confirmar_senha')}
              className={styles.input}
            />
            {errors.confirmar_senha && (
              <p className={styles.errorMessage}>
                {errors.confirmar_senha.message}
              </p>
            )}
          </div>

          <button type='submit' className={styles.submitButton}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
