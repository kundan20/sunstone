import React from 'react'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'
import NotFound from '../shared/NotFound'
import { routes } from '../routes'
import Layout from './Layout'

const Router = () => {
    console.log('', routes)
    return (
        <AppRouter>
            <Switch>
                {routes.map((route) => (
                    <Route 
                        path = {route.path}
                        exact = {true}
                        render = {(props) => {
                            return (
                                <Layout {...props}>
                                    <route.component {...props} />
                                </Layout>
                            )
                        }}
                        key = {route.path}
                    />
                ))}
                <Route 
                    path = '*'
                    render = { props => <NotFound {...props} />}
                />
            </Switch>
        </AppRouter>
    )
}

export default Router
