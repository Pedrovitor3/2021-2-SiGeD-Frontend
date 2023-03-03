import moment from 'moment-timezone';
import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import colors from '../../Constants/colors';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, ProcessNumber,
  CreatedAt, ProcessContainer,
} from './Style';

const ViewDemandCard = ({ demand }) => (
  <Card>
    <TopSide>
      <DemandName>
        {demand.name}
      </DemandName>
      <EditIcon>
        <Link
          to={`/demandas/editar/${demand._id}`}
          id={demand._id}
          style={{ color: colors.primary, textDecorationLine: 'none' }}
        >
          <BsPencil />
        </Link>
      </EditIcon>
    </TopSide>
    <DemandDescription>
      {demand.description}
    </DemandDescription>
    <BottomSide>
      <ProcessContainer>
        {demand.process.filter((p) => p !== '').map((p, index) => (
          <ProcessNumber>
            {`Processo Nº ${index + 1}:`}
            {` ${p}`}
          </ProcessNumber>
        ))}
      </ProcessContainer>
      <CreatedAt>
        { moment.parseZone(demand.createdAt).local(true).format('DD/MM/YYYY HH:mm')}
      </CreatedAt>
    </BottomSide>
  </Card>

);

export default ViewDemandCard;
