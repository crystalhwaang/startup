import React from 'react';
import { Uploads } from './uploads';
import { ActivityFeed } from './activityFeed';

export function Photo({ userName }) {
  return (
    <main className="bg-secondary container-fluid p-4">
      <h2 className="text-white text-center">Food Feed</h2>

      <div className="row">
        <div className="col-md-6">
          <Uploads userName={userName} />
        </div>

        <div className="col-md-6">
          <ActivityFeed userName={userName} />
        </div>
      </div>
    </main>
  );
}