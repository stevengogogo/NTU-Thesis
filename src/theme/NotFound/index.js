/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import classnames from 'classnames';

import styles from './styles.module.css';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="container margin-vert--xl">
        <div className="row">
          <div
            className={classnames(
              'col col--8 col--offset-2',
              styles.notFoundContainer
            )}
          >
            <img
              src="./img/page_not_found.svg"
              className={classnames('margin-bottom--lg', styles.notFoundBlob)}
            />
            <h1 className="hero__title">醒醒吧! 宅男，你沒有妹妹</h1>
            <p>
              The documentation site has recently moved, chances are that the
              page you're looking for is{' '}
              <a href="./docs/">in the new docs section</a>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
