import React from 'react';
import { PostNotifier } from './postNotifier';

export function ActivityFeed() {
  const [events, setEvents] = React.useState([]);
  const [socketConnected, setSocketConnected] = React.useState(false);

  React.useEffect(() => {
    async function loadPhotos() {
      try {
        const response = await fetch('/api/photos', { credentials: 'include' });
        if (response.ok) {
          const photos = await response.json();
          setEvents(photos);
        }
      } catch (error) {
        console.error('Error loading photos', error);
      }
    }

    loadPhotos();
  }, []);

  React.useEffect(() => {
    function handlePostEvent(event) {
        setEvents(prevEvents => {
        let newEvents = [event, ...prevEvents];

        if (newEvents.length > 10) {
            newEvents = newEvents.slice(0, 10);
        }

        return newEvents;
        });
    }

    PostNotifier.addHandler(handlePostEvent);
    PostNotifier.addStatusHandler(setSocketConnected);

    return () => {
        PostNotifier.removeHandler(handlePostEvent);
        PostNotifier.removeStatusHandler(setSocketConnected);
    };
    }, []);

  return (
    <div className="card p-3">
      <h4>Recent Uploads</h4>
      <div className={`mb-2 ${socketConnected ? 'text-success' : 'text-warning'}`}>
        Live updates: {socketConnected ? 'Connected' : 'Reconnecting...'}
      </div>

      {events.map((e, index) => (
        <div key={e._id != null ? String(e._id) : index}>
          - {e.userName} uploaded {e.food} at {e.date}
        </div>
      ))}
    </div>
  );
}