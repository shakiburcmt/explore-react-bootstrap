import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ArticleCard from '../Card/ArticleCard';

function GridCard() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
              <ArticleCard></ArticleCard>
          </Col>
      ))}
    </Row>
  );
}

export default GridCard;