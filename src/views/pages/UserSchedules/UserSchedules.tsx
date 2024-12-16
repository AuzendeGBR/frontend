import { useEffect, useState } from 'react';

import { useAuth } from '../../../app/hooks/useAuth';
import { ISchedule } from '../../../app/interfaces/ISchedule';
import scheduleService from '../../../app/services/scheduleService';

import styles from './UserSchedules.module.css';

const UserSchedules = () => {
  const { user } = useAuth();
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        if (user.id) {
          const response = await scheduleService.getSchedulingsByUser(user.id);
          if (!response) {
            throw new Error('Erro ao carregar os agendamentos.');
          }
          setSchedules(response);
          setError(null);
        }
      } catch (err) {
        setError('Não foi possível carregar os agendamentos.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  if (loading) {
    return <div>Carregando agendamentos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Meus agendamentos</h1>
      {schedules.length === 0 ? (
        <p>Não há agendamentos disponíveis para este usuário.</p>
      ) : (
        <ul className={styles.schedulesList}>
          {schedules.map((schedule) => (
            <li key={schedule.id} className={styles.listItem}>
              <div>
                <h2>{schedule.servico.nome}</h2>
                <p>{schedule.servico.descricao}</p>
                <p>{new Date(schedule.data_hora).toLocaleString()}</p>
                <strong>R$ {schedule.servico.preco}</strong>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSchedules;
