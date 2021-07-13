<h1 align="center">Third Challenge</h1>

## Running the app

First you need to install [Kind](https://kind.sigs.k8s.io/), then:

```bash
$ kind create cluster --config ./kind.yml

$ kubectl apply -f backend/

$ kubectl apply -f frontend/

$ kubectl port-forward service/backend-service 3000:3000
$ kubectl port-forward service/frontend-service 3001:3001

#run on http://localhost:3001
```
