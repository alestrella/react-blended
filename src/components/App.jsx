import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
// import Box from './Box';
import HomeView from 'pages/HomeView';
import EventView from 'pages/EventView';
import EventSubView from './EventSubView/EventSubView';
import EventDetailsView from 'pages/EventDetailsView';
import NotFoundView from 'pages/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="events" element={<EventView />}>
          <Route path=":eventId" element={<EventSubView />}></Route>
        </Route>
        <Route path="events/:eventId/details" element={<EventDetailsView />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
