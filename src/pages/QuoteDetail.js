import { useParams, Route } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <div>
      <h1>Dettaglio Prevetivo</h1>
      <p>Id Preventivo: {params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
