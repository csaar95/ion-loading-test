import { IonButton, useIonLoading, useIonToast } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [showIonLoading, dismissIonLoading] = useIonLoading();
  const [showIonToast] = useIonToast();

  const handleClick = async() => {
    try {
      showIonLoading('Loading');
      // await new Promise((resolve) => setTimeout(() => resolve(true), 1000));
      // if (true) {
      //   throw new Error('An error occurred');
      // };
      await fetch('https://uri.invalid', { method: 'GET' });
      dismissIonLoading();
      showIonToast('Success', 3000);

    } catch(e) {
      dismissIonLoading();
      showIonToast(String(e), 3000);
    };
  };

  return (
    <IonButton onClick={handleClick}>Start Loading</IonButton>
  );
};

export default ExploreContainer;
