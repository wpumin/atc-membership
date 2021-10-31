import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PATH } from './const/Constant'

// Common Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './fonts/style.css'

// Layout and UI
import Navbar from './components/layout/Navbar/'
import Footer from './components/layout/Footer'
import MainWrapper from './components/layout/MainWrapper'
import Loading from './components/UI/Loading'

// LazyLoad Component
const FirstTime = React.lazy(() => import('./components/pages/FirstTime'))
const NotFound = React.lazy(() => import('./components/pages/NotFound'))
const ListMember = React.lazy(() => import('./components/members/ListMember'))
const MemberForm = React.lazy(() => import('./components/members/MemberForm'))
const ViewMember = React.lazy(() => import('./components/members/ViewMember'))

const App = () => {
    return (
        <Router>
            <Navbar />
            <MainWrapper>
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/" component={FirstTime} />
                        <Route exact path={PATH} component={ListMember} />
                        <Route
                            exact
                            path={`${PATH}/add`}
                            component={MemberForm}
                        />
                        <Route
                            exact
                            path={`${PATH}/view/:id`}
                            component={ViewMember}
                        />
                        <Route
                            exact
                            path={`${PATH}/edit/:id`}
                            component={MemberForm}
                        />
                        <Route
                            exact
                            path={`${PATH}/watchlist`}
                            component={ListMember}
                        />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </MainWrapper>
            <Footer />
        </Router>
    )
}

export default App
