import React from 'react';
import { Uploads } from './uploads';
import { ActivityFeed } from './activityFeed';

export function Photo({ userName: userNameProp }) {
  const userName =
    userNameProp ||
    (typeof window !== 'undefined' ? localStorage.getItem('userName') : '') ||
    '';

  const [feedKey, setFeedKey] = React.useState(0);

  return (
    <main className="bg-secondary container-fluid p-4">
      <h2 className="text-white text-center">Food Feed</h2>

      <div className="row">
        <div className="col-md-6">
          <Uploads
            userName={userName}
            onUploadSuccess={() => setFeedKey((k) => k + 1)}
          />
        </div>

        <div className="col-md-6">
          <ActivityFeed key={feedKey} />
        </div>
      </div>
    </main>
  );
}