import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton,
IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { play, pause, stop, add } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Arpeaga</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Stats</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-text-center">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardSubtitle>Session</IonCardSubtitle>
                <h1>01:23:45</h1>
              </IonCol>
              <IonCol>
                <IonCardSubtitle>Current Run</IonCardSubtitle>
                <h1>00:01:23</h1>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCardSubtitle>Run Count</IonCardSubtitle>
                <IonCardTitle>33</IonCardTitle>
              </IonCol>
              <IonCol>
                <IonCardSubtitle>Total Runs</IonCardSubtitle>
                <IonCardTitle>1337</IonCardTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
          
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
        <IonCardTitle>Controls</IonCardTitle>
        </IonCardHeader>
          <IonCardContent className="ion-text-center">  
          <IonButton expand="block" fill="solid" size="large" color="secondary">Just One More</IonButton>
          {/* <IonButton fill="solid" size="default" color="primary">Play/Pause</IonButton>
          <IonButton fill="solid" size="default" color="primary">Stop</IonButton> */}
          <IonButton fill="solid" size="default" color="primary">
            <IonIcon icon={play} />
          </IonButton>
          <IonButton fill="solid" size="default" color="primary">
            <IonIcon icon={pause} />
          </IonButton>
          <IonButton fill="solid" size="default" color="primary">
            <IonIcon icon={stop} />
          </IonButton>
          <IonButton fill="solid" size="default" color="primary">
              <IonIcon icon={add} /> 
              Add Drop
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Session Drops</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Run 2: Harlequin Crest</p>
            <p>Run 23: Gul Rune</p>
            <p>Run 24: Ist Rune</p>
            <p>Run 523: Sur Rune</p>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
