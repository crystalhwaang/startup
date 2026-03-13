import React from 'react';
import { PostNotifier } from './postNotifier';

export function ActivityFeed() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    async function loadPhotos() {
      try {
        const response = await fetch('/api/photos');
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

    return () => {
        PostNotifier.removeHandler(handlePostEvent);
    };
    }, []);

  return (
    <div className="card p-3">
      <h4>Recent Uploads</h4>

      {events.map((e, index) => (
        <div key={index}>
          - {e.userName} uploaded {e.food} at {e.date}
        </div>
      ))}
    </div>
  );
}