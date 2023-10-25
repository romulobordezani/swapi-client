import React, { FC } from 'react';
import { CountedResource } from '../../redux/features/popular/types/CountedResource';
import { Film, People, Planet, ResourceType, Species, Starship, Vehicle } from '../../services/swapi/types';
import { popularDisplayer } from './PopularDisplayer.style';

import { IconType } from 'react-icons';
import { FaRocket, FaTruck, FaEye } from 'react-icons/fa';
import { RiEmpathizeFill, RiPlanetFill, RiAliensFill, RiClapperboardFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export interface PopularDisplayerProps {
  pageView: CountedResource;
}

interface ResourceMapper {
  label: string;
  icon: IconType;
  url: string;
}

export const PopularDisplayer: FC<PopularDisplayerProps> = ({ pageView }) => {
  if (!pageView) {
    return null;
  }

  const { resourceType, resource } = pageView;

  let resourceMapper = {} as ResourceMapper;

  if (resourceType === ResourceType.Film) {
    const typedResource = resource as Film;

    resourceMapper = {
      label: typedResource.title,
      icon: RiClapperboardFill as IconType,
      url: `/${ResourceType.Film}/${pageView.id}`
    };
  }

  if (resourceType === ResourceType.People) {
    const typedResource = resource as People;

    resourceMapper = {
      label: typedResource.name,
      icon: RiEmpathizeFill as IconType,
      url: `/${ResourceType.People}/${pageView.id}`
    };
  }

  if (resourceType === ResourceType.Planet) {
    const typedResource = resource as Planet;

    resourceMapper = {
      label: typedResource.name,
      icon: RiPlanetFill as IconType,
      url: `/${ResourceType.Planet}/${pageView.id}`
    };
  }

  if (resourceType === ResourceType.Species) {
    const typedResource = resource as Species;

    resourceMapper = {
      label: typedResource.name,
      icon: RiAliensFill as IconType,
      url: `/${ResourceType.Species}/${pageView.id}`
    };
  }

  if (resourceType === ResourceType.Starship) {
    const typedResource = resource as Starship;

    resourceMapper = {
      label: typedResource.name,
      icon: FaRocket as IconType,
      url: `/${ResourceType.Starship}/${pageView.id}`
    };
  }

  if (resourceType === ResourceType.Vehicle) {
    const typedResource = resource as Vehicle;

    resourceMapper = {
      label: typedResource.name,
      icon: FaTruck as IconType,
      url: `/${ResourceType.Vehicle}/${pageView.id}`
    };
  }

  return (
    <li css={popularDisplayer}>
      <Link to={resourceMapper.url}>
        <>
          <resourceMapper.icon />
          {resourceMapper.label} &nbsp; <FaEye />
          {pageView.count}
        </>
      </Link>
    </li>
  );
};
