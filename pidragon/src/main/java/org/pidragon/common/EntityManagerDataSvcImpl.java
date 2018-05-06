package org.pidragon.common;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;
import org.toasthub.core.common.EntityManagerDataSvc;

@Component("EntityManagerDataSvc")
public class EntityManagerDataSvcImpl implements EntityManagerDataSvc {

	@PersistenceContext(unitName = "PUData")
	EntityManager emData;


	@Override
	public EntityManager getInstance() {
		return emData;
	}

}
