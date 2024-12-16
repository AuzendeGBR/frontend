import { useEffect, useState } from 'react';
import { useCart } from '../../../app/hooks/useCart';
import { IService } from '../../../app/interfaces/IService';
import serviceAPI from '../../../app/services/servicesService';
import styles from './AvaliableServices.module.css';

const AvaliableServices = () => {
  const [services, setServices] = useState<IService[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedDateTime, setSelectedDateTime] = useState<{
    [key: number]: string;
  }>({});
  const cart = useCart();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await serviceAPI.getAll();
        setServices(servicesData);
        setError(null);
      } catch (err) {
        setError('Não foi possível carregar os serviços.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDateTimeChange = (serviceId: number, dateTime: string) => {
    setSelectedDateTime((prevDateTime) => ({
      ...prevDateTime,
      [serviceId]: dateTime,
    }));
  };

  const handleSubmit = async (serviceId: number) => {
    const dateTime = selectedDateTime[serviceId];
    if (!dateTime) {
      alert('Por favor, selecione uma data e horário.');
      return;
    }

    const formattedDateTime = new Date(dateTime).toISOString();

    try {
      const selectedService = services.find(
        (service) => service.id === serviceId
      );
      if (selectedService) {
        cart.addToCart({
          id: selectedService.id,
          nome: selectedService.nome,
          preco: selectedService.preco,
          descricao: selectedService.descricao,
          data_hora: formattedDateTime,
        });
      }

      alert('Serviço adicionado ao carrinho com sucesso!');
    } catch (error) {
      console.error('Erro ao adicionar o serviço ao carrinho:', error);
      alert('Erro ao adicionar o serviço ao carrinho.');
    }
  };

  if (loading) {
    return <div>Carregando serviços...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Serviços Disponíveis</h1>
      <ul className={styles.servicesList}>
        {services.map((service) => (
          <li key={service.id} className={styles.listItem}>
            <div>
              <h2>{service.nome}</h2>
              <p>{service.descricao}</p>
              <strong>R$ {service.preco}</strong>
            </div>

            <div className={styles.dateTimeSelector}>
              <label htmlFor={`datetime-${service.id}`}>
                Escolha uma data e horário:
              </label>
              <input
                id={`datetime-${service.id}`}
                type='datetime-local'
                value={selectedDateTime[service.id] || ''}
                min={new Date().toISOString().slice(0, 16)}
                onChange={(e) =>
                  handleDateTimeChange(service.id, e.target.value)
                }
              />
              <button
                onClick={() => handleSubmit(service.id)}
                className={styles.submitButton}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvaliableServices;
